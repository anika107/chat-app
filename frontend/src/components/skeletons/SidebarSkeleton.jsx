import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 lg:w-72 bg-base-100 border-r border-base-300
    flex flex-col transition-all duration-200"
    >
      <div className="border-b border-base-300 w-full p-4">
        <div className="flex items-center gap-2">
          <Users className="size-4 text-base-content/40" />
          <span className="hidden lg:block text-xs font-semibold uppercase tracking-[0.08em] text-base-content/50">Contacts</span>
        </div>
      </div>
      <div className="overflow-y-auto w-full px-2 py-3 space-y-0.5">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-3.5 w-32 rounded-md mb-2" />
              <div className="skeleton h-3 w-16 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;