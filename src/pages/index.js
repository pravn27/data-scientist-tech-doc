import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/data-scientist-tech-doc/docs/category/data-scientist-documentations" />
  );
}
