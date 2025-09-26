
export default function DashboardLayout({ children }) {
    return (
        <div>
            {/* هدر مخصوص داشبورد */}
            <header style={{ background: "#222", color: "#fff", padding: "10px" }}>
                <h1>داشبورد من</h1>
            </header>

            {/* محتوای صفحه داشبورد */}
            <main>{children}</main>

            {/* فوتر مخصوص داشبورد */}
            <footer style={{ background: "#111", color: "#fff", padding: "10px" }}>
                <p>© داشبورد ۱۴۰۳</p>
            </footer>
        </div>
    );
}
