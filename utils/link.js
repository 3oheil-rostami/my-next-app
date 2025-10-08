// components/LinkComponent.jsx
export default function LinkComponent({ url, label = 'address' , target}) {
  return (
    <a href={url} target={target} rel="noopener noreferrer">
      {label}
    </a>
  );
}
 