const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
<h2> Hola!💕</h2>
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/serendipityerr/serendipityerr/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/serendipityerr/serendipityerr/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/serendipityerr/serendipityerr/output/github-contribution-grid-snake.svg">
</picture>

<div align="left">
<picture>
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=serendipityerr&show_icons=true&hide_border=true&line_height=24&theme=buefy"
    media="(prefers-color-scheme: radical)"
  />
  <img src="https://github-readme-stats.vercel.app/api?username=serendipityerr&show_icons=true&hide_border=true&line_height=24&theme=buefy" />
</picture>
<picture>
  <img src="./cat.gif" width="335">
</picture>
</div>
`;
console.log(readme)
