import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";
import { PulseLoader } from "react-spinners";

function Details({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <PulseLoader color="#53C60B" style={{ position: 'absolute' , top:'50%' , left:'48.5%' }}/>
  }
  return <DetailsPage {...data} />;
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();
  if (!res.ok) {
    return {
      notFound:true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
