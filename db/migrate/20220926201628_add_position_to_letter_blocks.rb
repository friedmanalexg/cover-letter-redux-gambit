class AddPositionToLetterBlocks < ActiveRecord::Migration[7.0]
  def change
    add_column :letter_blocks, :position, :integer
  end
end
