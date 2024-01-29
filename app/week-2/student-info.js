import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Chan Li</h1>
      <ul>
        <li>
          <Link href="repository">
            https://github.com/chanlidev?tab=repositories
          </Link>
        </li>
      </ul>
    </main>
  );
}
