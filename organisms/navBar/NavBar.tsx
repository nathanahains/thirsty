import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Text } from "../../components/atoms/text/Text";
import NavigationButton from "../../components/molecules/navigationButton/NavigationButton";
import reverseSlug from "../../components/particles/reverseSlug";
import theme from "../../theme";

const NavBar = ({ children }: any) => {
  const router = useRouter();
  const { slug }: {slug?: string} = router.query;
  const mainText = !slug ? "Thirsty" : reverseSlug(slug);
  const { defaultGray, borderGray } = theme.colors;
  return (
    <>
      <StyledDiv defaultGray={defaultGray}>
        {slug && (
          <div className="left-button">
              <NavigationButton position="left" />
          </div>
        )}
        <div>
          <Text content={`${mainText}`} />
        </div>
      </StyledDiv>
      {children}
    </>
  );
};

export default NavBar;

const StyledDiv = styled.div`
  border-bottom: 1px solid
    ${({ defaultGray }: { defaultGray: string }) => defaultGray};
  background: #ededed;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 50px;
  .left-button {
    position: absolute;
    left: 0;
  }
`;
