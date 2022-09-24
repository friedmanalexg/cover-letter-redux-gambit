class ChangeTypeToBlockTypeOnProseBlock < ActiveRecord::Migration[7.0]
  def change
    rename_column(:prose_blocks, :type, :block_type)
  end
end
