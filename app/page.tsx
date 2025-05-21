import Image from "next/image";

export default function Home() {
  return (
    <form action="https://registeration-backend-vercel-git-main-deepas-projects-0a652578.vercel.app/api/register" method="POST">


      <h2>Register</h2>

      <div>
        <label htmlFor="name">Full Name:</label><br />
        <input type="text" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required />
      </div>

      <div>
        <label htmlFor="confirm_password">Confirm Password:</label><br />
        <input type="password" id="confirm_password" name="confirm_password" required />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
