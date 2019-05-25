class CreateDevises < ActiveRecord::Migration[6.0]
  def change
    create_table :devises do |t|
      t.integer :pincode
      t.integer :volume
      t.float :temperatura
      t.boolean :status

      t.timestamps
    end
  end
end
