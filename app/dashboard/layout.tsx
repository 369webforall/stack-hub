

export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    return(<>

    <div className="h-full">
      {children}
      </div>
    
    </>)
  }