import LinkCard from "./LinkCard"
const Menu = () => {
  return (
    <div className="mt-20 mb-20">
      <ul className="flex gap-10 items-center justify-center">
        <LinkCard route="dailyCharacters" description="Daily Characters" />
        <LinkCard route="browseCollections" description="Browse Collections" />
        <LinkCard route="browseCharacters" description="Browse Characters" />
        <LinkCard route="quiz" description="Quiz" />
      </ul>
    </div>
  )
}

export default Menu
