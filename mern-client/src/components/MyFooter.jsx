import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full bg-gray-800 text-gray-500 px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className="mb-4" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
          <Footer.Title title="help center" className="mb-4" />
          <Footer.LinkGroup col >
              <Footer.Link href="https://discord.com">Discord Server</Footer.Link>
              <Footer.Link href="https://twitter.com">Twitter</Footer.Link>
              <Footer.Link href="https://facebook.com">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal"  className="mb-4" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download"  className="mb-4"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between text-gray-500">
          <Footer.Copyright href="#" by="Flowbite™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://github.com" icon={BsGithub} />
            <Footer.Icon href="https://dribbble.com" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
