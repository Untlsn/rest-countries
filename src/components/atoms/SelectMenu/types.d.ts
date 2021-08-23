export interface SelectMenuProps {
  options: string[],
  placeholder: string
  onSearch(option: string): void
}