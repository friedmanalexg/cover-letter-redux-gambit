class CreateLetterBlocks < ActiveRecord::Migration[7.0]
  def change
    create_table :letter_blocks do |t|
      t.belongs_to :letter, null: false, foreign_key: true
      t.belongs_to :prose_block, null: false, foreign_key: true

      t.timestamps
    end
  end
end
