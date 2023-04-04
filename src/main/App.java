package main;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import DBUtil.DBUtil;

public class App {
	static Connection conn = null;

	public static void start() {
		Scanner sc = new Scanner(System.in);

		while (true) {
			System.out.println("명령어 > ");
			String cmd = sc.nextLine();

			conn = DBUtil.Connect(conn);
			int action = doAction(conn, sc, cmd);
			conn = DBUtil.ConnectClose(conn);
			if (action == -1) {
				System.out.println("시스템을 종료하겠습니다");
				break;
			}

		}
	}

	private static int doAction(Connection conn, Scanner sc, String cmd) {
		if (cmd.equals("article write")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;

			System.out.println("제목 : ");
			String title = sc.nextLine();
			System.out.println("내용 : ");
			String body = sc.nextLine();

			String sql = "insert into article set ";
			sql += "regDate = now(), updateDate = now(), ";
			sql += "title = '" + title + "', `body` = '" + body + "', hit = 0;";
			try {
				pstmt = conn.prepareStatement(sql);
				int affectedRow = pstmt.executeUpdate();
				System.out.println(affectedRow + "행 업데이트 완료!");
			} catch (SQLException se) {
				System.out.println("오류발생");
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}

			return 0;
		} else if (cmd.equals("article list")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String sql = "select * from article";
			List<Map<String, Object>> rows = new ArrayList<>();
			try {
				pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				ResultSetMetaData metaData = rs.getMetaData();
				int columnSize = metaData.getColumnCount();

				System.out.println("번호    /     제목     /     내용    ");
				while (rs.next()) {
					Map<String, Object> row = new HashMap<>();
					for (int i = 0; i < columnSize; i++) {
						String columnName = metaData.getColumnName(i + 1);
						Object columnValue = rs.getObject(columnName);
						row.put(columnName, columnValue);
					}
					rows.add(row);
				}
				for (int i = rows.size() - 1; i >= 0; i--) {
					System.out.println(rows.get(i).get("id") + "   /  " + rows.get(i).get("title") + "  /  "
							+ rows.get(i).get("body"));
				}

			} catch (SQLException se) {
				System.out.println("오류");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
			return 0;
		} else if (cmd.startsWith("article modify")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String cmdDiv[] = cmd.split(" ");
			if (cmdDiv.length != 3) {
				System.out.println("검색어를 잘못 입력했다");
				return 0;
			}
			int id = Integer.parseInt(cmdDiv[2]);
			String sql = "select * from article where id =" + id + ";";
			try {
				pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				if (rs.next() == false) {
					System.out.println("찾는 게시물이 없다");
					return 0;
				}
			} catch (SQLException se) {
				System.out.println("오료");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
			System.out.println("제목 > ");
			String title = sc.nextLine();
			System.out.println("내용 > ");
			String body = sc.nextLine();

			sql = "update article set ";
			sql += "title = '" + title + "', ";
			sql += "`body`= '" + body + "' where id =" + id + ";";
			try {
				pstmt = conn.prepareStatement(sql);
				int affectedRow = pstmt.executeUpdate();
				System.out.println(affectedRow + "행 업데이트 완료");
			} catch (SQLException se) {
				System.out.println("오료");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}

		} else if (cmd.startsWith("article delete")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String cmdDiv[] = cmd.split(" ");
			if (cmdDiv.length != 3) {
				System.out.println("검색어를 잘못 입력했다");
				return 0;
			}
			int id = Integer.parseInt(cmdDiv[2]);
			String sql = "select * from article where id =" + id + ";";
			try {
				pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				if (rs.next() == false) {
					System.out.println("찾는 게시물이 없다");
					return 0;
				}
			} catch (SQLException se) {
				System.out.println("오료");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
			sql = "delete from article where id=" + id + ";";
			try {
				pstmt = conn.prepareStatement(sql);
				int affectedRow = pstmt.executeUpdate();
				System.out.println(affectedRow + "행 삭제 완료");

			} catch (SQLException se) {
				System.out.println("오료");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
		} else if (cmd.equals("member join")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			System.out.println("아이디를 입력해주세요");
			String userId = sc.nextLine();
			String userPw = null;
			String sql = "select * from `member` where userId='" + userId + "';";
			try {
				pstmt = conn.prepareStatement(sql);
				rs = pstmt.executeQuery();
				if (rs.next()) {
					System.out.println("중복된 아이디 입니다.");
					return 0;
				}
			} catch (SQLException se) {
				System.out.println("오류");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
			while (true) {
				System.out.println("비밀번호를 입력해주세요");
				userPw = sc.nextLine();
				System.out.println("비밀번호 확인");
				if (userPw.equals(sc.nextLine())) {
					System.out.println("이름을 입력해주세요");
					break;
				} else {
					System.out.println("비밀번호를 확인해주세요");
				}
			}
			String userName = sc.nextLine();
			sql = "insert into `member` set ";
			sql += "regDate=now(), updateDate=now(), ";
			sql += "userId = '" + userId + "', ";
			sql += "userPw = '" + userPw + "', ";
			sql += "userName = '" + userName + "';";
			try {
				pstmt = conn.prepareStatement(sql);
				int affectedRow = pstmt.executeUpdate();
				System.out.println(affectedRow + "개 업데이트 완료!");
			} catch (SQLException se) {
				System.out.println("오류");
				se.printStackTrace();
			} finally {
				DBUtil.CloseDB(pstmt, rs);
			}
		} else if (cmd.equals("member login")) {
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			boolean loginIdChk=false;
			int logintry = 0;
			String userPw = null;
			String userName=null;
			while (true) {
				
				logintry++;
				System.out.println("아이디를 입력해 주세요");
				String userId = sc.nextLine();
				try {
					String sql = "select * from member where userId='" + userId + "';";
					pstmt = conn.prepareStatement(sql);
					rs=pstmt.executeQuery();
					loginIdChk=rs.next();
					System.out.println(loginIdChk);
					if(loginIdChk) {
					userPw=rs.getString("userPw");
					userName=rs.getString("userName");
					}
				} catch (SQLException se) {
					System.out.println("오류");
					se.printStackTrace();
				} finally {
					DBUtil.CloseDB(pstmt, rs);
				}
				if (logintry>5) {
					System.out.println("로그인 횟수를 초과하였습니다 안녕히가셈");
			
					return 0;
				}
				if (loginIdChk==false) {
					System.out.println("일치하는 아이디가 존재하지 않습니다");
					continue;
				}
				break;
			}
			System.out.println(userPw);
			System.out.println("비밀번호를 입력해 주세요");
			if(userPw.equals(sc.nextLine())) {
				System.out.println(userName+"님 환영합니다");
				return 0;
			}else {
				System.out.println("껏영");
				return 0;
			}

		} else if (cmd.equals("exit")) {
			return -1;
		} else {
			System.out.println("잘못된 입력");
			return 0;
		}
		return 0;

	}
}