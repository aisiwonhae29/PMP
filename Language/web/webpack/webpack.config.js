const path = require("path");

module.exports = {
	entry: "./src/index.js", // 엔트리 파일
	output: {
		filename: "bundle.js", // 출력 파일 이름
		path: path.resolve(__dirname, "dist"), // 출력 폴더
	},
	mode: "development", // 모드 설정 (개발 or 배포)
};
