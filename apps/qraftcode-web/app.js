const select = document.querySelector("#provider")
const state = document.querySelector("#provider-state")

select?.addEventListener("change", () => {
  const option = select.options[select.selectedIndex]
  const name = option?.textContent?.split(" · ")[0]
  const message = name
    ? `${name}: 공식 문서와 접근 조건 검증 전까지 사용할 수 없습니다.`
    : "아직 사용할 수 있는 검증된 Provider가 없습니다."
  state?.replaceChildren(Object.assign(document.createElement("span"), { className: "state-dot" }), document.createTextNode(message))
})
