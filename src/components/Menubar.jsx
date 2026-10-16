import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

export const MenubarComponent = () => {
    return (
        <div className="p-4">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem onSelect={() => alert("New file")}>
                      New File
                    </MenubarItem>
                    <MenubarItem onSelect={() => alert("Opening file")}>
                      Open
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
        
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem onSelect={() => alert("Undo")}>
                      Undo
                    </MenubarItem>
                    <MenubarItem onSelect={() => alert("Redo")}>
                      Redo
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
    )
}