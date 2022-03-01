const btnJoin = document.querySelector("#btn-join");

const getReq = () => {
  const id = document.querySelector("#id").value;
  const psword = document.querySelector("#psword").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  return {
    id,
    psword,
    name,
    email,
  };
};

const register = () => {
  const req = getReq();

  fetch("/user/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("회원가입이 완료되었습니다.");
        location.href = "/user/login";
      } else {
        if (res.code === -3) {
          if (res.err) console.error("SERVER ERROR :", res.err);
          alert("회원가입에 실패하였습니다.");
        }
      }
    });
};

btnJoin.addEventListener("click", register);
