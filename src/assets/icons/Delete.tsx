

export default function Delete({ className, onClicks }: { className: string, onClicks: () => void }) {
  return (
    <img className={className} onClick={onClicks} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nOXQMQ4BURSF4T+htYRZBCV7mCinFDWNhD1QsoexD8NCaEmmJDEJzSuU99wbBfMnr3nJO1/yoC0tgBp4pVOnO7nqY8R7qm8DB/6+XeB7thZgFQCWFqAIAIUFGAWAoQXIAkBmATrA0zHeAF2MXRzAGaGTAzgqwN4BlAqwcQBrBZg7gJkCjB1ArgADB9BXgB7wEMbv6Y3UFLgZxq/ARB3/nd5G6fCJTgW3rQAAAABJRU5ErkJggg==" />
  )
}
