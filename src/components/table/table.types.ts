export type TableProps = {
  children: React.ReactNode;
  className?: string;
};

export type TableHeadProps = {
  children: React.ReactNode;
  className?: string;
};

export type TableBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type TableRowProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export type TableCellProps = {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
};
