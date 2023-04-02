package DBUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBUtil {
	public static Connection Connect(Connection conn) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			String url ="jdbc:mysql://127.0.0.1:3306/JAM?useUnicode=true&characterEncoding=utf8&autoReconnect=true&serverTimezone=Asia/Seoul&useOldAliasMetadataBehavior=true&zeroDateTimeNehavior=convertToNull";
			conn = DriverManager.getConnection(url, "root", "");
		}catch(ClassNotFoundException e) {
			System.out.println("드라이버 로딩 실패");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	public static Connection ConnectClose(Connection conn){
		try {if(conn!=null) {conn.close();}}catch(SQLException e) {}
		return conn;
	}
	public static void CloseDB(PreparedStatement pstmt, ResultSet rs) {
		try {if(pstmt!=null)pstmt.close();}	catch(SQLException se) {}
		try {if(rs!=null)	rs.close();}	catch(SQLException se) {}
	}
}
