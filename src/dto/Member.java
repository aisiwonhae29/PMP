package dto;

public class Member {
	public int id;
	public String regDate;
	public String updateDate;
	public String userId;
	public String userPw;
	public String userName;
	
	public Member(int id, String name, String regDate, String updateDate, String userId, String userPw,
			String userName) {
		super();
		this.id = id;
		this.regDate = regDate;
		this.updateDate = updateDate;
		this.userId = userId;
		this.userPw = userPw;
		this.userName = userName;
	}
	
	
}
