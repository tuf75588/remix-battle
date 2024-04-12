const navList: string[] = [
  'All',
  'JavaScript',
  'Python',
  'Java',
  'Rust',
  'CSS',
];

export default function NavList() {
  return (
    <>
      <ul className="flex mx-auto">
        {navList.map((item) => (
          <li className="m-2" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
