"use client"

import * as React from "react"
import { MoreVertical, X } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// #region CONTEXT

type SidebarContext = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isMobile: boolean
}
const SidebarContext = React.createContext<SidebarContext | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

type SidebarProviderProps = {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = React.useState(!isMobile)

  React.useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [isMobile])

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, isMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}
// #endregion

// #region SIDEBAR
const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isMobile } = useSidebar()
  if (isMobile) {
    return (
      <Sheet>
        <SidebarTrigger asChild>
          <div ref={ref} className={className} {...props}></div>
        </SidebarTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent>{props.children}</SidebarContent>
        </SheetContent>
      </Sheet>
    )
  }
  return <div ref={ref} className={cn(className)} {...props}></div>
})
Sidebar.displayName = "Sidebar"
// #endregion

// #region SIDEBAR HEADER
const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-16 shrink-0 items-center justify-between border-b px-4",
      className
    )}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"
// #endregion

// #region SIDEBAR CONTENT
const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("h-full", className)} {...props} />
})
SidebarContent.displayName = "SidebarContent"
// #endregion

// #region SIDEBAR FOOTER
const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-16 shrink-0 items-center justify-end border-t p-4",
      className
    )}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"
// #endregion

// #region SIDEBAR MENU
const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex w-full flex-col gap-1", className)}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"
// #endregion

// #region SIDEBAR MENU ITEM
type SidebarMenuItemProps = {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}
const SidebarMenuItem = React.forwardRef<HTMLDivElement, SidebarMenuItemProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className)} {...props} />
  }
)
SidebarMenuItem.displayName = "SidebarMenuItem"
// #endregion

// #region SIDEBAR MENU BUTTON
type SidebarMenuButtonProps = ButtonProps & {
  isActive?: boolean
  tooltip?: React.ReactNode
  hideTooltip?: boolean
  collapsible?: boolean
  isCollapsed?: boolean
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      children,
      asChild,
      isActive,
      tooltip,
      hideTooltip = false,
      isCollapsed,
      collapsible = false,
      ...props
    },
    ref
  ) => {
    const { isOpen } = useSidebar()
    const isButtonActive = collapsible ? isCollapsed : isActive

    const button = (
      <Button
        ref={ref}
        variant={isButtonActive ? "accent" : "ghost"}
        size={isOpen ? "default" : "icon"}
        className={cn("w-full", isOpen ? "justify-start" : "", className)}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    )

    if (hideTooltip || isOpen) {
      return button
    }

    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            {React.cloneElement(button, {
              children: React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === "span") {
                  return null
                }
                return child
              }),
            })}
          </TooltipTrigger>
          <TooltipContent side="right">{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

// #endregion

// #region SIDEBAR MENU COLLAPSIBLE

const SidebarMenuCollapsible = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Collapsible ref={ref} className={cn("w-full", className)} {...props} />
))
SidebarMenuCollapsible.displayName = "SidebarMenuCollapsible"

const SidebarMenuCollapsibleTrigger = CollapsibleTrigger

const SidebarMenuCollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CollapsibleContent>
>(({ className, ...props }, ref) => (
  <CollapsibleContent
    ref={ref}
    className={cn("data-[state=open]:pb-1", className)}
    {...props}
  />
))
SidebarMenuCollapsibleContent.displayName = "SidebarMenuCollapsibleContent"

// #endregion

// #region SIDEBAR TRIGGER
const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "isCollapsed">
>(({ className, ...props }, ref) => {
  const { isMobile, isOpen, setIsOpen } = useSidebar()

  if (isMobile) {
    return <SheetTrigger ref={ref} className={className} {...props} />
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {isOpen ? <X /> : <MoreVertical />}
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
// #endregion

// #region SIDEBAR SEPARATOR
const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar()
  if (!isOpen) {
    return <Separator ref={ref} className="my-2" {...props} />
  }
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2 px-3 py-2", className)}
      {...props}
    >
      <Separator className="shrink" />
      <span className="text-xs text-muted-foreground">
        {props.children ?? null}
      </span>
      <Separator className="shrink" />
    </div>
  )
})
SidebarSeparator.displayName = "SidebarSeparator"
// #endregion

// #region SIDEBAR INSET
const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSidebar()

  if (!isOpen) {
    return null
  }
  return <div ref={ref} className={cn("p-3", className)} {...props} />
})
SidebarInset.displayName = "SidebarInset"
// #endregion

export {
  // Sidebar
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  // Sidebar Menu
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuCollapsible,
  SidebarMenuCollapsibleTrigger,
  SidebarMenuCollapsibleContent,
  SidebarSeparator,
  SidebarInset,
  SidebarTrigger,
}
