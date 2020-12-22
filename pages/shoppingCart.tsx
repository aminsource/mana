import Layout from "../components/Layout";

const shoppingCart = () => {
  return (
    <Layout title="مانا - سبد خرید">
      <Title />
      <div className="min-h-screen">سبد خرید </div>
    </Layout>
  );
};

export default shoppingCart;

/// Page Sections
const Title = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "10vh",
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/landing/background.jpeg')",
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <h1 className="text-white font-semibold text-5xl">سبد خرید</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);