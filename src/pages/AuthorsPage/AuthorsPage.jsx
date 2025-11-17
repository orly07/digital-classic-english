import { motion } from "framer-motion";
import * as S from "./AuthorsPage.styled";
import AuthorCard from "../../components/Cards/AuthorCard";
import { LoadingFallback } from "../../components/Loading/LoadingFallback";
import { fadeIn } from "../../utils/helpers/motionVariants";
import { useAuthor } from "../../utils/hooks/useAuthor";

const AuthorsPage = () => {
  const { authors, loading, error } = useAuthor();

  if (loading) return <LoadingFallback />;
  if (error) return <p>Error loading authors.</p>;

  return (
    <S.PageContainer
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <S.Title>Meet the Authors</S.Title>
      <S.Description>
        Learn more about the legendary authors who shaped the world of
        literature and inspired generations of readers and writers.
      </S.Description>

      <S.AuthorsGrid>
        {authors.map((author) => (
          <AuthorCard
            key={author.key || author.id}
            author={{
              name: author.name,
              image: author.image?.url,
              description: author.description,
            }}
          />
        ))}
      </S.AuthorsGrid>
    </S.PageContainer>
  );
};

export default AuthorsPage;
