export const EmptyBoardsState = () => {
  return (
    <div className="flex flex-col items-center w-full gap-6 text-neutral-100 mt-12">
      <div className="relative flex flex-col items-center justify-center h-69.25 md:h-69.25 max-[800px]:h-50 max-[800px]:scale-80">
        <div
          className="absolute z-20 -translate-y-22.5 w-92.5 h-27 max-[800px]:w-75 max-[800px]:h-22 
                    bg-neutral-600 rounded-[10px] p-5 max-[800px]:p-4 flex flex-col gap-6 max-[800px]:gap-4"
        >
          <div className="flex items-center justify-between w-full">
            <span className="w-37.5 h-6 rounded-[10px] bg-neutral-500" />
            <div className="flex justify-between w-14.5">
              <span className="w-6 h-6 rounded-full bg-neutral-500" />
              <span className="w-6 h-6 rounded-full bg-neutral-500" />
            </div>
          </div>

          <span className="w-full h-6 rounded-[10px] bg-neutral-400" />
        </div>

        <div
          className="absolute z-30 scale-110 w-92.5 h-27 max-[800px]:w-75 max-[800px]:h-22 
                    bg-neutral-600 rounded-[10px] p-5 max-[800px]:p-4 flex flex-col gap-6 max-[800px]:gap-4"
        >
          <div className="flex items-center justify-between w-full">
            <span className="w-37.5 h-6 rounded-[10px] bg-neutral-500" />
            <div className="flex justify-between w-14.5">
              <span className="w-6 h-6 rounded-full bg-neutral-500" />
              <span className="w-6 h-6 rounded-full bg-neutral-500" />
            </div>
          </div>

          <span className="w-full h-6 rounded-[10px] bg-neutral-300" />
        </div>

        <div
          className="absolute z-10 translate-y-22.5 w-92.5 h-27 max-[800px]:w-75 max-[800px]:h-22 
                    bg-neutral-700 rounded-[10px] p-5 max-[800px]:p-4 flex flex-col gap-6 max-[800px]:gap-4"
        >
          <div className="flex items-center justify-between w-full">
            <span className="w-37.5 h-6 rounded-[10px] bg-neutral-700" />
            <div className="flex justify-between w-14.5">
              <span className="w-6 h-6 rounded-full bg-neutral-700" />
              <span className="w-6 h-6 rounded-full bg-neutral-700" />
            </div>
          </div>

          <span className="w-full h-6 rounded-[10px] bg-neutral-500" />
        </div>
      </div>

      <h2 className="mt-6 text-2xl max-[800px]:text-xl font-semibold text-neutral-100 text-center">
        Start by creating a board
      </h2>

      <p className="text-lg max-[800px]:text-base text-center w-141.5 max-[800px]:w-full text-neutral-300 -mt-2">
        Create your first board to organize tasks, ideas, or projects. Click the
        "Add Board" button on the top of the sidebar to get started and bring
        your plans to life!
      </p>
    </div>
  );
};
