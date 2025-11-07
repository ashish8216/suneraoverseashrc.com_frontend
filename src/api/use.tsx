// src/api/useSetting.ts
import { useFetch } from "./useFetch";
import { API_URL } from "./url";

type SettingContent = {
  name: string;
  email: string;
  logo: string;
  mobile_number: string;
  working_hour: string;
  google_maps: string;
  address: string;
  facebook: string;
  twitter: string | null;
};

type Setting = {
  id: number;
  content: SettingContent;
};

type SettingResponse = {
  setting: Setting[];
}[]; // ← based on your original response

type TestimonialContent = {
  name: string;
  title: string;
  image: string;
  desction: string;
};

type Testimonial = {
  id: number;
  content: TestimonialContent;
};

type TestimonialResponse = {
  testimonial: Testimonial[];
}[]; // ← based on your original response

type DownloadContent = {
  title: string;
  pdf: string;
};
type Download = {
  id: number;
  content: DownloadContent;
};

type DownloadResponse = {
  download: Download[];
}[]; // ← based on your original response

type TeamContent = {
  image: string;
  post: string;
};

type Team = {
  id: number;
  name: string;
  content: TeamContent;
};

type TeamResponse = {
  team: Team[];
}[]; // ← based on your original response

type FAQContent = {
  questions: string;
  answers: string;
};

type FAQ = {
  id: number;
  content: FAQContent;
};

type FAQResponse = {
  faq: FAQ[];
}[]; // ← based on

// types/project.ts
type ProjectContent = {
  image: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  area: string;
  location: string;
  year: string;
};

type Project = {
  id: number;
  title: string;
  slug: string | null;
  category: string;
  content: ProjectContent;
};
// If API returns { project: [...] }
type ProjectResponse = {
  projects: Project[];
}[];

type ProjectOneResponse = {
  project: Project | null;
}[];

type ServiceContent = {
  image: string;
  description: string;
};

type Service = {
  id: number;
  title: string;
  slug: string | null;
  content: ServiceContent;
};
// If API returns { project: [...] }
type ServiceResponse = {
  services: Service[];
}[];

type ServiceOneResponse = {
  service: Service | null;
}[];

type ServiceHomeResponse = {
  servicesHome: Service[];
}[];

type slideshowContent = {
  title: string;
  image: string;
  p: string;
};

type Slideshow = {
  id: number;
  content: slideshowContent;
};

type slideshowResponse = {
  slideshow: Slideshow[];
}[]; // array of objects/ ← based on your original response

type Tag = {
  id: number;
  name: string;
  slug: string | null;
  image: string;
  item: number;
};
type Tags = {
  id: number;
  name: string;
  slug: string | null;
  image: string;
};
type Category = {
  id: number;
  name: string;
  parentId: number | null;
  slug: string | null;
  image: string;
  item: number;
};

type Video = {
  id: number;
  title: string;
  video: string;
};

type VideoResponse = {
  video: Video[];
}[];

type Categories = {
  id: number;
  name: string;
  parentId: number | null;
  slug: string;
};

type CategoriesResponse = {
  categories: Category[];
};
type TagResponse = {
  tag: Tag[];
};

type Product = {
  id: number;
  name: string;
  slug: string | null;
  category: string;
  tag: string;
  image: string;
  video: string | null;
  description: string;
};

type PaginationInfo = {
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
};

type ShopResponse = {
  shop: PaginationInfo & {
    data: Product[];
  };
}[];

type CategoryProductsResponse = {
  shop: Product[];
  category: Categories;
};
type TagProductsResponse = {
  shop: Product[];
  tag: Tags;
};
type ProductResponse = {
  product: Product;
}[];

type SearchResponse = {
  products: Product[];
  search: string;
};

export function useSetting() {
  const { data, loading, error } = useFetch<SettingResponse>(
    `${API_URL}setting`
  );

  const setting = data?.[0]?.setting?.[0]?.content ?? null;

  return { data, loading, error, setting };
}

export function useDownload() {
  const { data, loading, error } = useFetch<DownloadResponse>(
    `${API_URL}download`
  );

  const download = data?.[0]?.download?.map((item) => item.content) ?? [];

  return { data, loading, error, download };
}

export function useTeam() {
  const { data, loading, error } = useFetch<TeamResponse>(`${API_URL}team`);

  const team = data?.[0]?.team ?? [];

  return { data, loading, error, team };
}

export function useFAQ() {
  const { data, loading, error } = useFetch<FAQResponse>(`${API_URL}faq`);

  const faq = data?.[0]?.faq ?? [];

  return { data, loading, error, faq };
}

export function useTestimonial() {
  const { data, loading, error } = useFetch<TestimonialResponse>(
    `${API_URL}testimonial`
  );

  const testimonials =
    data?.[0]?.testimonial?.map((item) => item.content) ?? [];

  return { data, loading, error, testimonials };
}

// ✅ for GET /projects
export function useProjects() {
  const { data, loading, error } = useFetch<ProjectResponse>(
    `${API_URL}projects`
  );

  // adjust depending on API shape
  const projects = data?.[0]?.projects ?? [];

  return { data, loading, error, projects };
}

// ✅ for GET /project/:slug
export function useProject(slug: string) {
  const { data, loading, error } = useFetch<ProjectOneResponse>(
    `${API_URL}project/${slug}`
  );

  const project = data?.[0]?.project ?? null;

  return { data, loading, error, project };
}

// ✅ for GET /projects
export function useServices() {
  const { data, loading, error } = useFetch<ServiceResponse>(
    `${API_URL}services`
  );

  // adjust depending on API shape
  const services = data?.[0]?.services ?? [];

  return { data, loading, error, services };
}

export function useServicesHome() {
  const { data, loading, error } = useFetch<ServiceHomeResponse>(
    `${API_URL}servicesHome`
  );

  // adjust depending on API shape
  const services = data?.[0]?.servicesHome ?? [];

  return { data, loading, error, services };
}

// ✅ for GET /project/:slug
export function useService(slug: string) {
  const { data, loading, error } = useFetch<ServiceOneResponse>(
    `${API_URL}service/${slug}`
  );

  const service = data?.[0]?.service ?? null;

  return { data, loading, error, service };
}

export function useSlideshow() {
  const { data, loading, error } = useFetch<slideshowResponse>(
    `${API_URL}slideshow`
  );

  const slideshow = data?.[0]?.slideshow?.map((item) => item.content) ?? [];

  return { data, loading, error, slideshow };
}

export function useTags() {
  const { data, loading, error } = useFetch<TagResponse>(`${API_URL}tag`);

  const tags = data?.tag ?? [];

  return { data, loading, error, tags };
}
export function useCategories() {
  const { data, loading, error } = useFetch<CategoriesResponse>(
    `${API_URL}categories`
  );

  const categories = data?.categories ?? [];

  return { data, loading, error, categories };
}

export function useVideo() {
  const { data, loading, error } = useFetch<VideoResponse>(`${API_URL}video`);

  const videos = data?.[0]?.video ?? [];

  return { data, loading, error, videos };
}

export function useShop(page: number) {
  const { data, loading, error } = useFetch<ShopResponse>(
    `${API_URL}shop?page=${page}`
  );

  const products = data?.[0]?.shop?.data ?? [];
  const pagination = {
    current_page: data?.[0]?.shop?.current_page ?? 1,
    last_page: data?.[0]?.shop?.last_page ?? 1,
    next_page_url: data?.[0]?.shop?.next_page_url ?? null,
    prev_page_url: data?.[0]?.shop?.prev_page_url ?? null,
  };

  return { data, loading, error, products, pagination };
}

export function useCategoryProducts(slug: string) {
  const { data, loading, error } = useFetch<CategoryProductsResponse>(
    `${API_URL}productCategories/${slug}`
  );

  const category = data?.category ?? null;
  const products = data?.shop ?? [];

  return { data, category, loading, error, products };
}

export function useTagProducts(slug: string) {
  const { data, loading, error } = useFetch<TagProductsResponse>(
    `${API_URL}productTags/${slug}`
  );

  const tag = data?.tag ?? null;
  const products = data?.shop ?? [];

  return { data, tag, loading, error, products };
}

export function useProduct(slug: string) {
  const { data, loading, error } = useFetch<ProductResponse>(
    `${API_URL}product/${slug}`
  );

  const product = data?.[0]?.product ?? null;

  return { data, loading, error, product };
}

export function useSearch(query: string) {
  const { data, loading, error } = useFetch<SearchResponse>(
    `${API_URL}search?search=${encodeURIComponent(query)}`
  );

  const products = data?.products ?? [];

  return { data, loading, error, products };
}
