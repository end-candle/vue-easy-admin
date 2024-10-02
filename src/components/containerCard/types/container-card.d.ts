import type { VNode } from 'vue';

export type ContainerCardProps = {
  bodyClass?: string;
};

export type ContainerCardSlots = {
  header?: () => VNode[];
  default?: () => VNode[];
};
