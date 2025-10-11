export default function layout({children}) {
  return (
    <div style={{ textAlign:'center'}}>
        <div>
            <h2>Posts List : </h2>
        </div>
      {children}
    </div>
  )
}
