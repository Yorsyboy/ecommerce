import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="max-w-[800px] mx-auto px-5">
        <Wrapper>
          <Logo href={"/"}>E-commerce</Logo>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Accounts</NavLink>
            <NavLink href={"/carts"}>Cart (0)</NavLink>
          </StyledNav>
        </Wrapper>
      </div>
    </StyledHeader>
  );
}
