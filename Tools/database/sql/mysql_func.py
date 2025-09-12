#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MySQL 함수들과 Python match-case 예제
"""

import mysql.connector
import util.file as file_util
from pathlib import Path
import json
from typing import Any, Dict, List, Optional

def test():
    config_path = Path(__file__).resolve().parents[2] / "config" / "local.json"
    print (config_path)
    with open(config_path) as f:
        config = json.load(f)
    print(config)


def connect_database(location) -> Optional[mysql.connector.MySQLConnection]:
    # 설정파일 경로
    config_path = Path(__file__).resolve().parents[2] / "config" / f"{location}.json"
    with open(config_path) as f:
        config = json.load(f)
    try:
        connection = mysql.connector.connect(
            host=config["host"],  # DB 서버 주소
            user=config["mysql_user"],  # 사용자 계정
            password=config["mysql_password"],  # 비밀번호
            database="pmp",  # 사용할 DB
        )
        print("데이터베이스 연결 성공!")
        return connection
    except mysql.connector.Error as e:
        print(f"데이터베이스 연결 실패: {e}")
        return None

# 데이터 삽입

def insert_data(conn, table_name, data_file):
    cursor = None
    try:
        cursor = conn.cursor()
        data = file_util.read_file(data_file)
        json = file_util.text_to_json(data)
        
        for item in json["content"]:
            sql = f"INSERT INTO {table_name} (name, content) VALUES (%s, %s)"
            cursor.execute(sql, (item, json["content"][item]))
        conn.commit()
        cursor.close()
    except Exception as e:
        print(f"데이터 삽입 실패: {e}")
        if cursor is not None:
            cursor.close()

# 메인 실행

def main(job, location, table_name, data_file):
    conn = None 
    
    try:
        conn = connect_database(location)
        
        if job == "insert":
            insert_data(conn, table_name, data_file)
        else:
            print(f"알 수 없는 작업: {job}")
        
    except Exception as e:
        print(f"데이터베이스 연결 실패: {e}")
        if conn is not None:
            conn.close()
