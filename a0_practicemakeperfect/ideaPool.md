# idea pool

### portfolio

\# 오늘뭐먹지

- apply the google logic in 오늘 뭐먹지
  - Handle each person's data and makes the result what they choose the food.
  - appeal to them the what is the food they like, and acknowledge them to what they likes.

### list

- 유사 IP라면 CIDR은 어느정도로 잡을지?
- The network link is successed, but from lineworld to khgb link is blocked. ping, curl doesn't permitted.
- VSZ and RSS
- 버프스위트 툴 요청변조 공격 , pass 인증 값 받고 데이터 변조 가능성
```
[헤올/백/31] [오후 2:00] 아 전단계가 좀 있습니다
[헤올/백/31] [오후 2:00] 프론트 -> 본인인증 -> 중복 체크 -> 중복 안될 경우 약관 동의 -> 아이디 패스워드 및 회원가입 정보 인력 -> 백 호출

    >[헤올/백/31] [오후 1:56] pass에서 값 내려주고
    >[헤올/백/31] [오후 1:56] 해당 값을 사용자에게 보여지는 화면이 있어서
    >[헤올/백/31] [오후 1:56] 거기서 이제 이름이나 핸드폰번호들이 보여지고 나머지 값들 입력 후에 회원가입 처리를 해주는데
    >[헤올/백/31] [오후 1:56] 이때 변조할 수가 있으니ㅉ
- apiKey, token, session 등 여러가지 조합
- 중복체크는 DI값
[헤올/백/31] [오후 2:05] 폰번호를 보여주는데 readonly처리를 해놓긴 해놨어요. 근데 개발자도구에서 임의로 수정을 할 수 있으니
[미르/백/28] [오후 2:28] 따로 서버호출하는것도 비용이니까
[미르/백/28] [오후 2:28] pass api호출해서 응답받은거 해쉬화하고


```
- 공부 내용
```

[미르/백/28] [오후 3:45] 답변이 오면 그에맞는 실시간알림시스템이라던지
[미르/백/28] [오후 3:45] 오토스케일링을 적용시키고
[미르/백/28] [오후 3:45] 여러개의 ec2환경에서 복합적으로 처리를해본다던지
[미르/백/28] [오후 3:46] 메세지큐나 이벤트큐를 활용하여 결과적 일관성을 적용해본다던지..
[미르/백/28] [오후 3:46] 빅테크기업의 취업우대조건에 써잇는것들을


```

- 동시성 제어, 이중화
```
단일 환경에선 서버 -> DB(Lock)이
서버 -> 레디스(Lock) -> DB 보단 빠릅니다
이를 통해 시스템 리소스 사용이 19.1% 감소하였고, 서버 응답 속도는 평균 15% 향상되었습니다. 이로써 동시성 문제를 해결하고
<- 이를 통해 시스템 리소스 사용이 19.1% 감소하였고, 서버 응답 속도는 평균 15% 향상되었습니다. 또한 동시성 문제 역시 해결되었습니다.
이로써, 이를 이런 단어가 많이 중복됩니다

[미르/백/28] [오후 3:46] 락 과정에
[미르/백/28] [오후 3:46] 직/역직렬화 과정이
[미르/백/28] [오후 3:46] 포함되어있어서
[미르/백/28] [오후 3:46] 느려진거아니에요?
평소엔 rdb쓰다가 이중화할때 redis를 쓰는이유가 궁금해요!

[매뜌/취준/27] [오후 3:48] 읽기쓰기의 속도를 캐시관리를 통해서
[매뜌/취준/27] [오후 3:48] 좀더 빠르게할수있다..?

```
### article to break down
- https://github.com/mitchellh/libxev
- https://www.browserless.io/blog/managing-concurrencies-with-nginx-and-lua
- Zed Decoded: Linux when? - https://zed.dev/blog/zed-decoded-linux-when
- https://github.com/spacemadev/elevate-free-tailwind-business-template
- https://jacobpadilla.com/articles/recreating-asyncio
- https://cdn.openai.com/spec/model-spec-2024-05-08.html
- https://mattermost.com/blog/making-a-postgres-query-1000-times-faster/
- https://github.com/ggerganov/llama.cpp/pull/7154
- https://mmapped.blog/posts/28-enlightenmentware.html
- https://breckyunits.com/scrollsets.html
- https://pcmicro.com/getdiz/file_id.html
