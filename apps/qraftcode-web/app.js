const select = document.querySelector("#provider")
const state = document.querySelector("#provider-state")

select?.addEventListener("change", () => {
  const name = select.options[select.selectedIndex]?.textContent?.split(" · ")[0]
  const message = name
    ? `${name}: 공식 문서 검증 전 — 연결을 사용할 수 없습니다.`
    : "Provider를 선택하면 검증 상태가 표시됩니다."
  state?.replaceChildren(Object.assign(document.createElement("span"), { className: "state-dot" }), document.createTextNode(message))
})
