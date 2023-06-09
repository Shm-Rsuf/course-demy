const Footer = () => {
  return (
    <footer>
      <div className="flex-center bg-gray-900 text-gray-50 py-5">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-rose-500 capitalize">c</span>ourse
          <span className="text-teal-400">Demy</span>. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
