import NavigationDirectory from "@/app/components/navigationDirectory";

export default function EditNetworkDetails() {
  return (
    <div className="w-full max-w-[921px]">
      <NavigationDirectory
        links={[
          {
            name: "Home",
            link: "/user",
          },
          {
            name: "Start entrepreneurship hub ",
            link: "/",
          },
          {
            name: "Edit",
          },
        ]}
      />

      <div className="w-full h-[136px] bg-[#FAFAFA] mb-4"></div>

      <div className="w-full font-semibold text-[#1C871B] text-center">Edit</div>

      <form action="">
      <label htmlFor="">Name</label>
      <input type="text" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6" />
      <label htmlFor="">Description</label>
      <textarea name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] flex gap-5 justify-between items-center rounded px-6 mb-6 pt-4 h-[134px]"></textarea>
      <div className="grid grid-cols-2 gap-6 max-w-full">
        <div>
          <label htmlFor="">Category</label>
          <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label htmlFor="">Location</label>
          <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label htmlFor="">Facilitator</label>
          <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
            <option value=""></option>
          </select>
        </div>
        <div>
          <label htmlFor="">Facilitator</label>
          <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
            <option value=""></option>
          </select>
        </div>
      </div>
      <label htmlFor="">Contact information</label>
      <input type="text" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6" />
      <label htmlFor="">Connection type</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Created</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Price tag</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Communication platform</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Engagement level</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Post frequency</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Communities interest</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Access requirements:</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Link to community:</label>
      <input type="text" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6" />
      <label htmlFor="">Interaction type:</label>
      <select name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6">
        <option value=""></option>
      </select>
      <label htmlFor="">Special achievements:</label>
      <textarea name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] flex gap-5 justify-between items-center rounded px-6 mb-6 pt-4 h-[134px]"></textarea>
      <label htmlFor="">Additional services:</label>
      <textarea name="" id="" className="border border-[#e5e5e5] w-full max-w-[599px] flex gap-5 justify-between items-center rounded px-6 mb-6 pt-4 h-[134px]"></textarea>

      <button className="w-full max-w-[429px] h-[50px] flex items-center justify-center gap-2.5 bg-[#df7c0d] rounded-[28px] font-medium text-lg text-white shadow-[0px_2px_8px_0px_#00000040_inset] border-none mx-auto mt-10 phone:w-[120px] phone:text-[11px] phone:h-8">Save Changes</button>
      </form>
    </div>
  );
}
