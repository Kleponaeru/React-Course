export default function TabButtons({ children, onClick, isActive }) {
  return (
    <li>
      <button className={isActive ? 'active' : ''} onClick={onClick}>{children}</button>
    </li>
  );
}
