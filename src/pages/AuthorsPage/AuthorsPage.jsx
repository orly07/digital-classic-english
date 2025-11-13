import { motion } from "framer-motion";
import * as S from "./AuthorsPage.styled";
import { authors } from "../../data/author";
import AuthorCard from "../../components/Cards/AuthorCard";
import { fadeIn } from "../../utils/helpers/motionVariants";

const AuthorsPage = () => {
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
          <AuthorCard key={author.id} author={author} />
        ))}
      </S.AuthorsGrid>
    </S.PageContainer>
  );
};

export default AuthorsPage;
