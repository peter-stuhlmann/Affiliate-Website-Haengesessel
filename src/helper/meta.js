export function meta(props) {
  var link = document.createElement('meta');
  link.setAttribute('name', 'description');
  link.content = props;
  document.getElementsByTagName('head')[0].appendChild(link);
}
