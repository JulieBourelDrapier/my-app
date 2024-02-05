const colors = {
  primary: '#156062',
  secondary:'#22de22',
  third: '#f8de65',
  fourth: '#00c092',
  fifth: '#ffbbab',
  sixth: '#fb8960',
  white: '#fff',
  black: '#000',
}
export default colors
// pr l'utiliser, il nous suffit de l'importer directement dans notre template string 
// exemple :
// const StyledLink = styled(Link)`
//     padding: 15px;
//     color: #8186a0;
//     text-decoration: none;
//     font-size: 18px;
//     ${(props) =>
//         props.$isFullLink &&
//         `color: white; border-radius: 30px; background-color: ${colors.primary};`}
// `