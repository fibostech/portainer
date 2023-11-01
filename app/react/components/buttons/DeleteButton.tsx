import { Trash2 } from 'lucide-react';

import { confirmDelete } from '@@/modals/confirm';

import { Button } from './Button';

export function DeleteButton({
  disabled,
  confirmMessage,
  onConfirmed,
}: {
  disabled?: boolean;
  confirmMessage?: string;
  onConfirmed(): Promise<void> | void;
}) {
  return (
    <Button
      color="dangerlight"
      disabled={disabled}
      onClick={() => handleClick()}
      icon={Trash2}
      className="!m-0"
    >
      Remove
    </Button>
  );

  async function handleClick() {
    if (!(await confirmDelete(confirmMessage))) {
      return undefined;
    }

    return onConfirmed();
  }
}
