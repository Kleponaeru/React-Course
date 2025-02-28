export default function TabButtons({ children, isActive, ...props }) {
  return (
    <li>
      <button className={isActive ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
