
import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return [
    { slug: 'amor-da-minha-vida' },
    { slug: 'expedicao-artica' },
    { slug: 'expedição-ártica' },
    { slug: 'campanha-volkswagen' },
    { slug: 'o-suspeito' },
    { slug: 'cidade-perdida' },
    { slug: 'revolucao-digital' },
    { slug: 'revolução-digital' },
    { slug: 'horizonte-azul' },
    { slug: 'memorias-de-guerra' },
    { slug: 'memórias-de-guerra' },
    { slug: 'campanha-nike' },
    { slug: 'nova-era' },
    { slug: 'campanha-samsung' },
    { slug: 'misterios-do-vale' },
    { slug: 'mistérios-do-vale' },
    { slug: 'coracao-selvagem' },
    { slug: 'coração-selvagem' },
    { slug: 'campanha-coca-cola' }
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetail projectSlug={params.slug} />;
}
