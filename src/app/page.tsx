import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from('tasks').select('*');
  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <h1 className="text-[46px]">ToDoアプリ</h1>
      <div className="flex flex-col gap-4 before:content-['']">
        <div>
          <h2>おべんきょう</h2>
        </div>
        <div>
          <h2>人</h2>
        </div>
        <div>
          <h2>趣味</h2>
        </div>
      </div>
    </main>
  );
}
