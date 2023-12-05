import { useState } from "react";

const A = () => {
  type fm = {
    name: string;
    email: string;
  };

  const [form, setForm] = useState<fm>({
    name: "",
    email: "",
  });

  const [arr, setArr] = useState<fm[]>([]);

  const onchanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submiter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArr([...arr, form]);
    setForm({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={submiter}>
        <input
          value={form.name}
          placeholder="name"
          onChange={(e) => onchanger(e)}
          name="name"
          type="text"
        />
        <input
          value={form.email}
          placeholder="email"
          onChange={(e) => onchanger(e)}
          type="email"
          name="email"
          id=""
        />
        <button type="submit">okkkk</button>
      </form>
      <div>
        {arr?.map((i) => (
          <div key={i.name}>
            <h1>{i.name}</h1>
            <span>{i.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default A ;
