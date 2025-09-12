let numeric = {
	1: "일",
	2: "이",
	3: "삼",
	4: "사",
	5: "오",
	6: "육",
	7: "칠",
	8: "팔",
	9: "구",
};

let korean = "";

let cmd_arr = process.argv.slice(2);

if(cmd_arr.length == 1){
    let num = parseInt(cmd_arr);
    console.log(change(num));
}

function change(number) {
	var words;
	korean = generate(number);
	return korean;
}

function generate(number) {
	var word;
	var remainder,
		words = arguments[1];

	if (number == 0) {
		return !words ? "zero" : words.join(" ");
	}

	if (!words) {
		words = [];
	}

	if (number > 100000000 || number < 0) {
		return new RangeError(
			"정상 범위를 초과한 값입니다. 담당자에게 문의바랍니다."
		);
	}

	if (typeof number !== "number") {
		return new Error("값이 숫자가 아닙니다. 담당자에게 문의바랍니다.");
	}

	if (number < 10) {
		remainder = 0;
		word = numeric[number];
	} else if (number < 100) {
		remainder = number % 10;
		word = generate(Math.floor(number / 10)) + "십";
	} else if (number < 1000) {
		remainder = number % 100;
		word = generate(Math.floor(number / 100)) + "백";
	} else if (number < 10000) {
		remainder = number % 1000;
		word = generate(Math.floor(number / 1000)) + "천";
	} else if (number >= 10000) {
		remainder = number % 10000;
		word = generate(Math.floor(number / 10000)) + "만";
	}
	words.push(word);
	return generate(remainder, words);
}

module.exports = {
	moneyToKorean: change,
};
