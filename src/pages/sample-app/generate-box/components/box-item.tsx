import styles from '../generate-box.module.css'

interface BoxItemProps {
  title: string
  bgColor: string
  onClick: () => void
}

function BoxItem({ title, bgColor, onClick }: BoxItemProps) {
  return (
    <button
      type="button"
      className={styles.box}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      aria-label={`${title}, change background color`}
    >
      {title}
    </button>
  )
}

export default BoxItem
