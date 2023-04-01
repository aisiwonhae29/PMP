package main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;


public class App {
	static Connection conn = null;

	public static void start() {
		Scanner sc = new Scanner(System.in);

		while (true) {
			System.out.println("명령어 > ");
			String cmd = sc.nextLine();
			Connection conn = null;

			try {
				Class.forName("com.mysql.jdbc.Driver");
				String url = "jdbc:mysql://127.0.0.1:3306/JAM?useUnicode=true&characterEncoding=utf8&autoReconnect=true&serverTimezone=Asia/Seoul&useOldAliasMetadataBehavior=true&zeroDateTimeNehavior=convertToNull";

				conn = DriverManager.getConnection(url, "root", "");
				System.out.println("연결 성공!");
				
				
				int actionResult = doAction(conn, sc, cmd);
				
				if(actionResult == -1) {
					System.out.println("시스템을 종료합니다");
					break;
				}
				
				
				
				
				
			} catch (ClassNotFoundException e) {
				System.out.println("드라이버 로딩 실패");
			} catch (SQLException e) {
				System.out.println("에러 : " + e);
			} finally {
				try {
					if (conn != null && !conn.isClosed()) {
						conn.close();
					}
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

			if (cmd.equals("article write")) {
				
			}
		}
	}

	private static int doAction(Connection conn, Scanner sc, String cmd) {
		if(cmd.equals("article write")) {
				System.out.println("title : ");
				String title = sc.nextLine();
				System.out.println("body : ");
				String body = sc.nextLine();
				
				PreparedStatement pstmt = null;
				
				try {
					String sql = "INSERT INTO article SET regDate=NOW(), updateDate=NOW(),"; 
					sql+= "title= '"+title+"',  `body`= '"+body+"';";
					System.out.println(sql);
					pstmt = conn.prepareStatement(sql);
					int affectedRow = pstmt.executeUpdate();
					System.out.println("affectedRow : "+affectedRow); 
				
				}catch(SQLException e) {
					System.out.println("에러1"+e);
				}finally {
					try {
						if(pstmt != null && !pstmt.isClosed()) {
							pstmt.close();
						}
					}catch(SQLException e) {
						e.printStackTrace();
					}
				}
				
			return 0;
		}else if(cmd.startsWith("article modify")) {
			String cmdDiv[] = cmd.split(" ");
			if (cmdDiv.length!=3) {
				System.out.println("잘못 입력했다!");
				return 0;
			}
			int id = Integer.parseInt(cmdDiv[2]);
			
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			
			Map<String, Object> articleMap;
			List<Map<String, Object>>rows = new ArrayList<>();
			try {
				String sql = "select * from article ";
				sql += "where id="+id+";";
				pstmt=conn.prepareStatement(sql);
				rs=pstmt.executeQuery(sql);
				ResultSetMetaData metaData= rs.getMetaData();
				int columnSize = metaData.getColumnCount();
				if(columnSize==0) {
					System.out.println("찾는 게시물이 없습니다");
				}
				while(rs.next()) {
					Map<String, Object> row = new HashMap<>();
					
					for(int columnIndex=0; columnIndex<columnSize; columnIndex++) {
						String columnName = metaData.getColumnName(columnIndex+1);
						Object value = rs.getObject(columnName);
						
						row.put(columnName,  value);
					}
					rows.add(row);
				}
				System.out.println(rows.get(0));
			
				
				
			}catch(IndexOutOfBoundsException ie) {
				System.out.println("찾는 게시물이 없습니다");
				return 0;
			}catch(SQLException e) {
				System.out.println("에러");
				e.printStackTrace();
			}finally {
				if(rs!=null) try {rs.close();} catch(SQLException ex) {}
				if(pstmt!=null) try {pstmt.close();} catch(SQLException ex) {}
			}
			return 0;
		}else if(cmd.startsWith("article list")) {
			String sql = "select * from article";
			PreparedStatement pstmt=null;
			ResultSet rs = null;
			try {
				pstmt = conn.prepareStatement(sql);
				rs=pstmt.executeQuery();
				while(rs.next()) {
					
				}
			}catch(SQLException e) {
				e.printStackTrace();
			}finally {
				 try{if(pstmt!=null && !pstmt.isClosed())pstmt.close();}catch(SQLException e) {};
				 try{if(rs!=null && !rs.isClosed())rs.close();}catch(SQLException e) {};
			}
			
		}else if(cmd.startsWith("article delete")) {
			String cmdDiv[] = cmd.split(" ");
			if(cmdDiv.length!=3) {
				System.out.println("잘못 입력하였습니다");
			}
			int id = Integer.parseInt(cmdDiv[2]);
			
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			
			String sql = "select * from article ";
			sql+="where id="+id+";";
			List<Map<String, Object>> rows=new ArrayList<>();
			try {
			pstmt=conn.prepareStatement(sql);
			rs=pstmt.executeQuery();
			ResultSetMetaData metadata = rs.getMetaData();
			int columnSize = metadata.getColumnCount();
			while(rs.next()) {
				Map<String, Object> row = new HashMap<>();
				
				for(int columnIndex =0; columnIndex<columnSize; columnIndex++ ) {
					String columnName = metadata.getColumnName(columnIndex+1);
					Object columnvalue = rs.getObject(columnName);
					row.put(columnName, columnvalue);
				}
				rows.add(row);
			}
			System.out.println(rows);
			sql="delete from article where id="+id;
			pstmt=conn.prepareStatement(sql);
			int affectedRow = pstmt.executeUpdate();
			System.out.println(affectedRow);
			}catch(IndexOutOfBoundsException ie) {
				System.out.println("찾는 게시물이 없습니다");
				ie.printStackTrace();
			}catch(SQLException e) {
				e.printStackTrace();
				System.out.println("오류 발생");
			}finally {
				try {if(pstmt != null && !pstmt.isClosed()) {}}catch(SQLException e){};
				try {if(rs != null && !pstmt.isClosed()){}}catch(SQLException e){};
			}
		}else if(cmd.equals("member join")) {
			return 0;
		}else {
			return -1;
		}
		return 0;
	}

}










