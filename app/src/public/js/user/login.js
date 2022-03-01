const btnLogin = document.querySelector("#btn-login");

const getReq = () => {
  const id = document.querySelector("#id").value;
  const psword = document.querySelector("#psword").value;

  return {
    id,
    psword,
  };
};

const login = () => {
  const req = getReq();

  fetch("/user/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("로그인이 완료되었습니다.");
        location.href = "/";
      } else {
        if (res.code === -1) alert("비밀번호가 틀렸습니다.");
        else if (res.code === -2) alert("존재하지 않은 아이디입니다.");
        else if (res.code === -3) {
          console.error("SERVER ERROR :", res.err);
          return alert("로그인에 실패하였습니다.");
        }
      }
    });
};

btnLogin.addEventListener("click", login);
