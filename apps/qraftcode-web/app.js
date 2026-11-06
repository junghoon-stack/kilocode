const select = document.querySelector("#provider")
const state = document.querySelector("#provider-state")

select?.addEventListener("change", () => {
  const name = select.options[select.selectedIndex]?.textContent?.split(" · ")[0]
  const message = name
    ? `${name}: 공식 문서 검증 전 — 현재 사용할 수 없습니다.`
    : "아직 사용할 수 있는 검증된 Provider가 없습니다."
  state?.replaceChildren(Object.assign(document.createElement("span"), { className: "state-dot" }), document.createTextNode(message))
})
